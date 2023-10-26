using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using BCrypt.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using UniversityRepositoryApi.DatabaseContext;
using UniversityRepositoryApi.Model;

namespace UniversityRepositoryApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SignUpController : ControllerBase
    {
        private readonly UGRepoContext _context;
        private readonly IConfiguration _configuration;


        public SignUpController (UGRepoContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [Authorize (Roles = "admin")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Users>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpPost]
        public async Task <ActionResult<Users>> CreateUsers(Users users)
        {
            /* Genetate a salt and Hash the password before storing it in the database */
            string salt = BCrypt.Net.BCrypt.GenerateSalt(12);
            users.User_Password = BCrypt.Net.BCrypt.HashPassword(users.User_Password, salt);

            _context.Users.Add(users);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUsers", new {id = users.User_ID}, users);
        }

        [HttpPost("verify")]
        public async Task<IActionResult> ConfirmUser (Users users) 
        {
            var client = await _context.Users.FirstOrDefaultAsync(options => options.User_Role.ToLower() == users.User_Role.ToLower());

            if (client == null || !BCrypt.Net.BCrypt.Verify(users.User_Password.ToLower(), client.User_Password))
            {
                return Unauthorized();
            }

            var token = GenerateJwtToken(client);
            return Ok(new {token});
        }


        private string GenerateJwtToken (Users users)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));

            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, users.User_ID.ToString()),
                new Claim(ClaimTypes.Name, users.User_Name),
                new Claim(ClaimTypes.Role, users.User_Role)
            };

            var token = new JwtSecurityToken (
                _configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: DateTime.UtcNow.AddMinutes(20),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id) 
        {
            var client = await _context.Users.FindAsync(id);

            if (client == null)
            {
                return NotFound();
            }
            _context.Users.Remove(client);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> ModifyUser(int id, Users users)
        {
            if (id != users.User_ID) 
            {
                return BadRequest();
            }
            _context.Entry(users).State = EntityState.Modified;

            try 
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if(!UserExists(id))
                {
                    return NotFound();
                }
                else 
                {
                    throw;
                }
            }


            return NoContent();
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e=> e.User_ID == id);
        }
    }
}
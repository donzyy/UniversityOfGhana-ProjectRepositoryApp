using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using UniversityRepositoryApi.DatabaseContext;
using UniversityRepositoryApi.Model;

namespace UniversityRepositoryApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SupervisorCommentaryAndRatingController : ControllerBase
    {
        private readonly UGRepoContext _context;
        private readonly IConfiguration _configuration;

        public SupervisorCommentaryAndRatingController(UGRepoContext context, IConfiguration configuration) 
        {
            _context = context;
            _configuration = configuration;
        }


        [HttpPut("{id}")]
        public async Task<IActionResult>UpdateCommentaryAndRating (int id, string commentary, int rating)
        {
            var SupervisorCommentaryAndRating = await _context.StudentSubmissions.FindAsync(id);

            if (SupervisorCommentaryAndRating == null)
            {
                return NotFound();
            }

            SupervisorCommentaryAndRating.Supervisor_Commentary = commentary;
            SupervisorCommentaryAndRating.Supervisor_Rating = rating;

            try
            {
                _context.StudentSubmissions.Update(SupervisorCommentaryAndRating);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
               /*  if (!studentSubmissionExist(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
                */
            }

            return NoContent();
        }
    }
}
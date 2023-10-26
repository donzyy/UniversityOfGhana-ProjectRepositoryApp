using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UniversityRepositoryApi.DatabaseContext;
using UniversityRepositoryApi.Model;

namespace UniversityRepositoryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SupervisorsController : ControllerBase
    {
        private readonly UGRepoContext _context;

        public SupervisorsController(UGRepoContext context)
        {
            _context = context;
        }

        // GET: api/Supervisors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Supervisor>>> GetSupervisors()
        {
            return await _context.Supervisors.ToListAsync();
        }

        // GET: api/Supervisors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Supervisor>> GetSupervisor(int id)
        {
            var supervisor = await _context.Supervisors.FindAsync(id);

            if (supervisor == null)
            {
                return NotFound();
            }

            return supervisor;
        }

        // PUT: api/Supervisors/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSupervisor(int id, Supervisor supervisor)
        {
            if (id != supervisor.Supervisor_ID)
            {
                return BadRequest();
            }

            _context.Entry(supervisor).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SupervisorExists(id))
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

        // POST: api/Supervisors
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Supervisor>> PostSupervisor(Supervisor supervisor)
        {
            _context.Supervisors.Add(supervisor);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSupervisor", new { id = supervisor.Supervisor_ID }, supervisor);
        }

        // DELETE: api/Supervisors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSupervisor(int id)
        {
            var supervisor = await _context.Supervisors.FindAsync(id);
            if (supervisor == null)
            {
                return NotFound();
            }

            _context.Supervisors.Remove(supervisor);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SupervisorExists(int id)
        {
            return _context.Supervisors.Any(e => e.Supervisor_ID == id);
        }
    }
}

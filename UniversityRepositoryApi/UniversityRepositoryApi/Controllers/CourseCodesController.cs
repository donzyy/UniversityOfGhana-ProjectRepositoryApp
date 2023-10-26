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
    public class CourseCodesController : ControllerBase
    {
        private readonly UGRepoContext _context;

        public CourseCodesController(UGRepoContext context)
        {
            _context = context;
        }

        // GET: api/CourseCodes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseCode>>> GetCourseCodes()
        {
            return await _context.CourseCodes.ToListAsync();
        }

        // GET: api/CourseCodes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CourseCode>> GetCourseCode(int id)
        {
            var courseCode = await _context.CourseCodes.FindAsync(id);

            if (courseCode == null)
            {
                return NotFound();
            }

            return courseCode;
        }

        // PUT: api/CourseCodes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourseCode(int id, CourseCode courseCode)
        {
            if (id != courseCode.Course_Code_ID)
            {
                return BadRequest();
            }

            _context.Entry(courseCode).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseCodeExists(id))
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

        // POST: api/CourseCodes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CourseCode>> PostCourseCode(CourseCode courseCode)
        {
            _context.CourseCodes.Add(courseCode);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCourseCode", new { id = courseCode.Course_Code_ID }, courseCode);
        }

        // DELETE: api/CourseCodes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourseCode(int id)
        {
            var courseCode = await _context.CourseCodes.FindAsync(id);
            if (courseCode == null)
            {
                return NotFound();
            }

            _context.CourseCodes.Remove(courseCode);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CourseCodeExists(int id)
        {
            return _context.CourseCodes.Any(e => e.Course_Code_ID == id);
        }
    }
}

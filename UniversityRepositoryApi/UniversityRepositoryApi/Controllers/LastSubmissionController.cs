using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UniversityRepositoryApi.DatabaseContext;
using UniversityRepositoryApi.Model;

namespace UniversityRepositoryApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LastSubmissionController : ControllerBase
    {
        private readonly UGRepoContext _context;

        public LastSubmissionController(UGRepoContext context) 
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<StudentSubmission>> GetLastSubmissions()
        {
            var lastSubmission = await _context.StudentSubmissions
            .OrderByDescending(s=> s.Submission_Date)
            .FirstOrDefaultAsync();

            if (lastSubmission == null) 
            {
                return NotFound();
            }

            return lastSubmission;
        }
    }
}
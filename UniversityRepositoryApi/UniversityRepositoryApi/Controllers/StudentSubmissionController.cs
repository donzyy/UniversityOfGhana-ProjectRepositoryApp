using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using UniversityRepositoryApi.DatabaseContext;
using UniversityRepositoryApi.Model;

namespace UniversityRepositoryApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentSubmissionController : ControllerBase
    {
        private readonly UGRepoContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment;
       

        public StudentSubmissionController (UGRepoContext context, IWebHostEnvironment webHostEnvironment) 
        {
            _context = context;
            _webHostEnvironment = webHostEnvironment;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentSubmission>>> GetSubmissions () 
        {
            return await _context.StudentSubmissions.ToListAsync();
        }

        [HttpGet("rejectedandpending")]
        public async Task<ActionResult<IEnumerable<StudentSubmission>>> GetPendingOrRejected ()
        {
            var filteredSubmission = await _context.StudentSubmissions
            .Where(s => s.Submission_Status == null || s.Submission_Status == "Rejected" || s.Submission_Status == "Pending")
            .ToListAsync();

            return filteredSubmission;
        }


        [HttpGet("approved")]
        public async Task<ActionResult<IEnumerable<StudentSubmission>>> GetApproved ()
        {
            var filteredApproval = await _context.StudentSubmissions
            .Where(s=> s.Submission_Status == "Approved")
            .ToListAsync();

            return filteredApproval;
        }

        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<StudentSubmission>>> GetAllStatuses () 
        {
            var filteredAll = await _context.StudentSubmissions
            .Where(s => s.Submission_Status == "Approved" || s.Submission_Status == "Rejected" || s.Submission_Status == "Pending")
            .ToListAsync();

            return filteredAll;
        }


        [HttpPost]
        public async Task <ActionResult<StudentSubmission>> CreateStudentSubmission ([FromForm]StudentSubmission studentSubmission) 
        {
            
            studentSubmission.Project_File_Name = await SaveProjectToDatabase(studentSubmission.Project_File);
            _context.StudentSubmissions.Add(studentSubmission);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSubmissions", new{id=studentSubmission.Student_Submission_ID}, studentSubmission);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudentSubmission (int id) 
        {
            var studentSubmission = await _context.StudentSubmissions.FindAsync(id);
            if (studentSubmission == null) 
            {
                return NotFound();
            }
            _context.StudentSubmissions.Remove(studentSubmission);
            await _context.SaveChangesAsync();

            return NoContent();
        }  


        [HttpPut("{id}")]
        [HttpPatch("{id}")]
        public async Task<IActionResult> ModifyStudentSubmission (int id, string submission_status) 
        {
            var submission = await _context.StudentSubmissions.FindAsync(id);
            if (submission == null)
            {
                return NotFound();
            }

            submission.Submission_Status = submission_status;

             try
            {
                _context.StudentSubmissions.Update(submission);
                await _context.SaveChangesAsync();
            }

            catch (DbUpdateConcurrencyException)
            {
                if (!studentSubmissionExist(id))
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

        private bool studentSubmissionExist(int id)
        {
            return _context.StudentSubmissions.Any(e => e.Student_Submission_ID == id);
        }


        [NonAction]
        public async Task<string> SaveProjectToDatabase (IFormFile project_File)
        {
            
            string Project_File_Name = new string (Path.GetFileNameWithoutExtension(project_File.FileName.Take(10).ToArray())).Replace(" ", "-");
            Project_File_Name = Project_File_Name + DateTime.Now.ToString("yymmssfff")+ Path.GetExtension(project_File.FileName);
           var Project_File_Path = Path.Combine(_webHostEnvironment.ContentRootPath, "ProjectUploads", Project_File_Name);

            using(var fileStream = new FileStream(Project_File_Path, FileMode.Create)) 
            {
                await project_File.CopyToAsync(fileStream);
            }
            return Project_File_Path;

           
        }
    }
}
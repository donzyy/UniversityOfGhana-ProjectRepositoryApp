using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using UniversityRepositoryApi.DatabaseContext;
using UniversityRepositoryApi.Model;

namespace UniversityRepositoryApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectUploadController : ControllerBase
    {
        private readonly UGRepoContext _context;
        private IWebHostEnvironment _webhostEnvironment;


        public ProjectUploadController (UGRepoContext context, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _webhostEnvironment = webHostEnvironment;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProjectUpload>> GetUploadedProject (int id) 
        {
            var projectUpload = await _context.ProjectUploads.FindAsync(id);

            if (projectUpload == null) 
            {
                return NotFound();
            }
            return projectUpload;
        }


        [HttpPost("upload")]
        public async Task<ActionResult<ProjectUpload>> UploadProject([FromForm]ProjectUpload projectUpload)
        {
             projectUpload.Project_Upload_File_Name = await SaveProject(projectUpload.Project_Upload_File);
                _context.ProjectUploads.Add(projectUpload);
                await _context.SaveChangesAsync();

                return StatusCode(201);            
        }


        [NonAction]
        public async Task< string> SaveProject (IFormFile project_Upload_File)
        {
            string project_Upload_File_Name = new string(Path.GetFileNameWithoutExtension(project_Upload_File.FileName.Take(10).ToArray())).Replace(' ', '-');
            project_Upload_File_Name = project_Upload_File_Name + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(project_Upload_File.FileName);
            var project_Upload_File_Path = Path.Combine(_webhostEnvironment.ContentRootPath, "ProjectUploads", project_Upload_File_Name);

            using (var fileStream = new FileStream(project_Upload_File_Path, FileMode.Create))
            {
               await project_Upload_File.CopyToAsync(fileStream);
            }
            return project_Upload_File_Path;
        }
    }
}
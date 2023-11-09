using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UniversityRepositoryApi.Model;

namespace UniversityRepositoryApi.DatabaseContext
{
    public class UGRepoContext: DbContext
    {
        
        public UGRepoContext(DbContextOptions<UGRepoContext>options): base(options)
        {

        }


        public virtual DbSet <Student> Students  { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<CourseCode> CourseCodes { get; set; }
        public virtual DbSet<Supervisor> Supervisors { get; set; }
        public virtual DbSet<StudentSubmission> StudentSubmissions { get; set; }
        public virtual DbSet<DepartmentCourseCodeSupervisor> DepartmentCourseCodeSupervisors { get; set; }
        
        public virtual DbSet<Project> Projects { get; set; }
        public virtual DbSet<ProjectSubmitted> ProjectSubmitteds { get; set; }
        public virtual DbSet<ProjectUpload> ProjectUploads { get; set; }
        public virtual DbSet<ProjectReview> ProjectReviews { get; set; }
        public virtual DbSet<Users> Users { get; set; }
        public virtual DbSet<Login> Logins { get; set; }
    }
}
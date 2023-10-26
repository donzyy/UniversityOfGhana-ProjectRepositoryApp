using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace UniversityRepositoryApi.Model
{
    public class Student
    {
        [Key]
        public int Student_ID { get; set; }
        public string First_Name { get; set; }
        public string Last_Name {get; set;}
        public string Middle_Name {get; set;}
        public string Gender { get; set; }
        public DateTime Date_Of_Birth { get; set; }
        public string Student_Email { get; set; }
        public string Student_Telephone { get; set; }
        
        /* [ForeignKey("Department_ID")]
        public Department Department { get; set; }

        [ForeignKey("Supervisor_ID")]
        public Supervisor Supervisor{ get; set; }

        [ForeignKey("Project_ID")]
        public Project Project { get; set; }

        [ForeignKey("Course_Code_ID")]
        public CourseCode CourseCode { get; set; }


        public ICollection<ProjectSubmitted> ProjectSubmitteds { get; set; } */
    }
}
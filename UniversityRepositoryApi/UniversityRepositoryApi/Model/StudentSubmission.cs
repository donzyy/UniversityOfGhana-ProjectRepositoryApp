using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace UniversityRepositoryApi.Model
{
    public class StudentSubmission
    {
        [Key]
        
        public int Student_Submission_ID { get; set; }
        public int Student_ID { get; set; }
        public string Student_Email { get; set; }
        public string Student_Contact { get; set; }
        public string First_Name { get; set; }
        public string Middle_Name { get; set; }
        public string Last_Name { get; set; }
        public int Supervisor_Value { get; set; }
        public int Department_Value { get; set; }
        public int CourseCode_Value { get; set; }
        public string Project_Title { get; set; }
        public string Project_Description { get; set; }   
        
        /* [StringLength(50, MinimumLength = 3,
        ErrorMessage = "First Name should be minimum 3 characters and a maximum of 50 characters")]
        [DataType(DataType.Text)]
        public string FirstName { get; set; } */
        public string Project_File_Name { get; set; }
        public DateTime Submission_Date { get; set; }
        public string Submission_Status { get; set; }
        public string Supervisor_Commentary { get; set; }
        public int Supervisor_Rating { get; set; }

        [NotMapped]
        public IFormFile Project_File { get; set; }

    }
}
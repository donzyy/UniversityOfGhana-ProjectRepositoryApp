using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace UniversityRepositoryApi.Model
{
    public class Project
    {
        [Key]
        public int Project_ID { get; set; }
        public string Project_Title { get; set; }
        public string Project_Description { get; set; }
        public string Project_Status { get; set; }

        /* [ForeignKey("Project_Submitted_ID")]
        public ProjectSubmitted ProjectSubmitted { get; set; }

        [ForeignKey("Project_Upload_ID")]
        public ProjectUpload ProjectUpload { get; set; }


        public ICollection<Student> Students { get; set; } */
    }
}
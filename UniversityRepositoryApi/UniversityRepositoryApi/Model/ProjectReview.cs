using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace UniversityRepositoryApi.Model
{
    public class ProjectReview
    {
        [Key]
        public int Project_Review_ID { get; set; }
        public int Project_Review_Rating { get; set; }
        public string Project_Review_Comment { get; set; }
        public DateTime Project_Review_Date { get; set; }

        /* [ForeignKey("Project_Submitted_ID")]
        public ProjectSubmitted ProjectSubmitted { get; set; } */
    }
}
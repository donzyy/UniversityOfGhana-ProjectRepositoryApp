using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace UniversityRepositoryApi.Model
{
    public class ProjectSubmitted
    {
        [Key]
        public int Project_Submitted_ID { get; set; }
        public DateTime Project_Submitted_Time { get; set; }

        [ForeignKey("Student_ID")]
        public Student Student { get; set; }

        



       /*  public ICollection<ProjectReview> ProjectReviews { get; set; }
        public ICollection<Project> Projects { get; set; } */
    }
}
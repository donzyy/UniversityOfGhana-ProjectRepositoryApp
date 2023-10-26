using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace UniversityRepositoryApi.Model
{
    public class DepartmentCourseCodeSupervisor
    {
        [Key]
        public int Department_CourseCode_Supervisor_ID { get; set; }

        [ForeignKey("Department_ID")]
        public Department Department { get; set; }

        [ForeignKey("Course_Code_ID")]
        public CourseCode CourseCode { get; set; }
        
        [ForeignKey("Supervisor_ID")]
        public Supervisor Supervisor { get; set; }

    }
}
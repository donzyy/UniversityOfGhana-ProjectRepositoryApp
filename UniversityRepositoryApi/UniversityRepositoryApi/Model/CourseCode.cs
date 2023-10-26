using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace UniversityRepositoryApi.Model
{
    public class CourseCode
    {
        [Key]
        public int Course_Code_ID { get; set; }
        public string Course_Code_Name { get; set; }
        public string Course_Code_Description { get; set; }


       /*  public ICollection<Student> Students { get; set; } */

        public ICollection<DepartmentCourseCodeSupervisor> DepartmentCourseCodeSupervisors { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace UniversityRepositoryApi.Model
{
    public class Department
    {
        [Key]
        public int Department_ID { get; set; }
        public string Department_Name { get; set; }
        public string Department_Description { get; set; }
        


        /* public ICollection<Student> Students { get; set; } */
        public ICollection<DepartmentCourseCodeSupervisor> DepartmentCourseCodeSupervisors { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace UniversityRepositoryApi.Model
{
    public class Supervisor
    {
        [Key]
        public int Supervisor_ID { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }



       /*  public ICollection<Student> Students { get; set; } */
        public ICollection<DepartmentCourseCodeSupervisor> DepartmentCourseCodeSupervisors { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace UniversityRepositoryApi.Model
{
    public class Login
    {
        [Key]
        public int Login_ID { get; set; }
        public string Login_Email { get; set; }
        public string Login_Password { get; set; }
    }
}
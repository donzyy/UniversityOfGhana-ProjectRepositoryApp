using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace UniversityRepositoryApi.Model
{
    public class Users
    {
        [Key]
        [JsonIgnore]
        public int User_ID { get; set; }
        public string User_Name { get; set; }
        public string User_Role { get; set; }
        public string User_Password { get; set; }
    }
}
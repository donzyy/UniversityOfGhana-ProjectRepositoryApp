using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace UniversityRepositoryApi.Model
{
    public class ProjectUpload
    {
        [Key]
        [JsonIgnore]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Project_Upload_ID { get; set; }
        public int Student_ID { get; set; }
        public string Project_Upload_File_Name { get; set; }

        [NotMapped]
        public IFormFile Project_Upload_File { get; set; }


        /* public ICollection<Project> Projects { get; set; } */
    }
}
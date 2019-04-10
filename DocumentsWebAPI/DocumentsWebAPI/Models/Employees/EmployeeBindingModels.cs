using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DocumentsWebAPI.Models.Employees
{
    public class EmployeeBindingModels
    {
        public class SelectEmployeeByEmail
        {
            [Required]
            public string Email { get; set; }
        }

        public class Employee : AddEmployee
        {
            public int EmployeeId { get; set; }
            public int DepartmentId { get; set; }
        }
    }
}
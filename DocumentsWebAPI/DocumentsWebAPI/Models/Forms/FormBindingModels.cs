using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DocumentsWebAPI.Models.Forms
{
    public class FormBindingModels
    {
        public class Form
        {
            [Required]
            public string Name { get; set; }
            [Required]
            public string FormFields { get; set; }
            [Required]
            public bool IsRequiredByEmployeeManager { get; set; }
        }
        public class VacationForm
        {
            [Required]
            public int EmployeeId { get; set; }
            [Required]
            public DateTime DateFrom { get; set; }
            [Required]
            public DateTime DateTo { get; set; }
            [Required]
            public string Notes { get; set; }
            [Required]
            public int DepartmentId { get; set; }
        }

        public class MyDocuments
        {
            [Required]
            public int EmployeeId { get; set; }
        }


    }
}
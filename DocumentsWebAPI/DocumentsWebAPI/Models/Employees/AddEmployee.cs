﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DocumentsWebAPI.Models.Employees
{
    public class AddEmployee
    {
        public string UserName { get; set; }
        public string DepartmentName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Position { get; set; }
    }
}
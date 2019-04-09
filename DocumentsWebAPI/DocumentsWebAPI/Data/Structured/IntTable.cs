using Microsoft.SqlServer.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DocumentsWebAPI.Data.Structured
{
    public class IntTable : IEnumerable<SqlDataRecord>
    {
        private IEnumerable<int> _items;

        public IntTable(IEnumerable<int> items)
        {
            _items = items;
        }

        private static SqlDataRecord GetRecord()
        {
            return new SqlDataRecord(
                new SqlMetaData[] { new SqlMetaData("Data", System.Data.SqlDbType.Int, -1) });
        }
        public IEnumerator<SqlDataRecord> GetEnumerator()
        {
            if (_items != null)
            {
                foreach (int item in _items)
                {
                    var rec = GetRecord();
                    rec.SetInt32(0, item);

                    yield return rec;
                }
            }
            yield break;
        }
        System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }

    }
}

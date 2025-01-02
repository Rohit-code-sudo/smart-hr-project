import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { DatatableProps } from "../../data/interface";

const Datatable: React.FC<DatatableProps> = ({ columns, dataSource, Selection }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [selections, setSelections] = useState<boolean>(true);
  const [filteredDataSource, setFilteredDataSource] = useState(dataSource);

  const onSelectChange = (newSelectedRowKeys: any[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleSearch = (value: string) => {
    setSearchText(value);

    if (!value) {
      // If search is cleared, reset the filtered data source to the full dataSource
      setFilteredDataSource(dataSource);
    } else {
      // Filter data based on search text
      const filteredData = dataSource.filter((record) =>
        Object.values(record).some((field) =>
          String(field).toLowerCase().includes(value.toLowerCase())
        )
      );
      setFilteredDataSource(filteredData);
    }
  };

  // Watch for changes in the Selection prop and update filteredDataSource
  useEffect(() => {
    setSelections(!selections);
    // If Selection changes, reset filteredDataSource to the full dataSource
    setFilteredDataSource(dataSource);
  }, [Selection, dataSource]);

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };


  return (
    <>
      <div className="table-top-data">
        <div className="row p-3">
          <div className="col-sm-12 col-md-6">
            <div className="dataTables_length" id="DataTables_Table_0_length"></div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div id="DataTables_Table_0_filter" className="dataTables_filter text-end mb-0">
              <label>
                <input
                  type="search"
                  className="form-control form-control-sm"
                  placeholder="Search"
                  aria-controls="DataTables_Table_0"
                  value={searchText}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      {!selections ? (
        <Table
          className="table datanew dataTable no-footer"
          columns={columns}
          rowHoverable={false}
          dataSource={filteredDataSource}
          pagination={{
            locale: { items_per_page: "" },
            nextIcon: <i className="ti ti-chevron-right" />,
            prevIcon: <i className="ti ti-chevron-left" />,
            defaultPageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ["10", "20", "30"],
          }}
        />
      ) : (
        <Table
          className="table datanew dataTable no-footer"
          rowSelection={rowSelection}
          columns={columns}
          rowHoverable={false}
          dataSource={filteredDataSource}
          pagination={{
            locale: { items_per_page: "" },
            nextIcon: <i className="ti ti-chevron-right" />,
            prevIcon: <i className="ti ti-chevron-left" />,
            defaultPageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ["10", "20", "30"],
            showTotal: (total, range) => `Showing ${range[0]} - ${range[1]} of ${total} entries`,
          }}
        />
      )}
    </>
  );
};

export default Datatable;

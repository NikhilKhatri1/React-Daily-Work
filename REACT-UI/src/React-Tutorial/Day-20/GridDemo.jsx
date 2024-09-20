
export function DataGrid(props) {
  if (props.layout === "grid") {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              {
                props.fields.map(field => <th key={field}>{field}</th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              props.data.map(item =>
                <tr key={item}>
                  {
                    Object.keys(item).map(key => <td key={key}>{item[key]}</td>)
                  }
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  } else if (props.layout === "card") {
    return (
      <div className="d-flex flex-wrap">
        {
          props.data.map(item =>
            <div className="card m-2 p-2" style={{ width: '200px' }} key={item}>
              <div className="card-header">
                {item[Object.keys(item)[0]]}
              </div>
              <div className="card-body">
                <dl>
                  <dt>{Object.keys(item)[1]}</dt>
                  <dd>{item[Object.keys(item)[1]]}</dd>
                </dl>
              </div>
              <div className="card-footer">
                <button className="btn btn-warning bi bi-cart4 w-100"> Buy </button>
              </div>
            </div>
          )
        }
      </div>
    )
  } else {
    return (
      <div>
        <h3>Please Select a Layout</h3>
      </div>
    )
  }
}

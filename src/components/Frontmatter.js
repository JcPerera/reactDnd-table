import React from 'react';

const Frontmatter = () => {
    return (
        <div>
            <h4>Frontmatter</h4>
            <a href="">+ Add PDF</a>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Order</th>
                        <th scope="col">Content Type</th>
                        <th scope="col">File</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>TitlePage</td>
                        <td>System</td>
                        <td>Locked</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>CopyrightPage</td>
                        <td>System</td>
                        <td>Locked</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>CustomTOCPage</td>
                        <td >File</td>
                        <td>X</td>
                    </tr>
                </tbody>
            </table>

            <h4>Components </h4>
            <p>To rearrange components, drag and drop them into position or change the numbers in the available fields.</p>
            
        </div>
    );
}

export default Frontmatter;
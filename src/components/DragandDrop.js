import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const books = [
    {
        "chapterId": "7f000101-6193-1053-8161-93f27dc70000",
        "hasPrivateResources": "false",
        "sectionDisplayed": "true",
        "sections": [
            {
                "id": 1,
                "author": "Peter Navarro/Greg Autry",
                "category": "Textbook",
                "currency": "$",
                "fileName": "M01_NAVA0238_01_SE_C01_PCL",
                "parentISBN": "9780132180238",
                "pearsonResourceType": "PearsonPremium",
                "price": "1.99",
                "resourceId": "35572edd-a1ea-45c7-98cb-f0ef1514c862",
                "resourceInstanceID": "7f000101-6193-1053-8161-93f2e1320001",
                "sequence": "0",
                "sharing": "Public",
                "title": "It's Not China Bashing If It's True"
            },
            {
                "id": 2,
                "author": "Peter Navarro/Greg Autry",
                "category": "Textbook",
                "currency": "$",
                "fileName": "M02_NAVA0238_01_SE_C02_PCL",
                "parentISBN": "9780132180238",
                "pearsonResourceType": "PearsonPremium",
                "price": "1.99",
                "resourceId": "e07aded6-8d09-4f19-aad3-afd2ec9af538",
                "resourceInstanceID": "7f000101-6193-1053-8161-93f2e1410002",
                "sequence": "1",
                "sharing": "Public",
                "title": "Death by Chinese Poison: Bodies for Bucks and Chicks for Free"
            },
            {
                "id": 3,
                "author": "Joson Chokatte",
                "category": "Textbook",
                "pearsonResourceType": "OM",
                "resourceId": "e90b9fee-c6dc-4890-b578-bc1aec3dc54f",
                "resourceInstanceID": "7f000101-6193-1053-8161-93f2e1410003",
                "sequence": "2",
                "sharing": "Public",
                "title": "8.5_11_test_pdf"
            }
        ],
        "title": "Chapter 1"
    },
    {
        "chapterId": "7f000101-604b-13b9-8160-ba8834c20704",
        "hasPrivateResources": "false",
        "sectionDisplayed": "true",
        "sections": [
            {
                "id": 4,
                "author": "Peter Navarro/Greg Autry",
                "category": "Textbook",
                "currency": "$",
                "fileName": "M14_NAVA0238_01_SE_C14_PCL",
                "parentISBN": "9780132180238",
                "pearsonResourceType": "PearsonPremium",
                "price": "1.99",
                "resourceId": "71eead34-75da-4ea8-8906-dabc11b80a82",
                "resourceInstanceID": "7f000101-6193-1053-8161-93f2e14a000f",
                "sequence": "11",
                "sharing": "Public",
                "title": "Death by China on China: Shanghaiing the Gene"
            },
            {
                "id": 5,
                "author": "Peter Navarro/Greg Autry",
                "category": "Textbook",
                "currency": "$",
                "fileName": "M15_NAVA0238_01_SE_C15_PCL",
                "parentISBN": "9780132180238",
                "pearsonResourceType": "PearsonPremium",
                "price": "1.99",
                "resourceId": "76fde5f6-b1c9-4929-a482-bda07fe482fa",
                "resourceInstanceID": "7f000101-6193-1053-8161-93f2e14a0010",
                "sequence": "12",
                "sharing": "Public",
                "title": "Death by China Apologist: Fareed Zakaria Floats Away"
            },
            {
                "id": 6,
                "author": "Peter Navarro/Greg Autry",
                "category": "Textbook",
                "currency": "$",
                "fileName": "M16_NAVA0238_01_SE_C16_PCL",
                "parentISBN": "9780132180238",
                "pearsonResourceType": "PearsonPremium",
                "price": "1.99",
                "resourceId": "827f4499-e8b5-4115-a28f-d40fce9be813",
                "resourceInstanceID": "7f000101-6193-1053-8161-93f2e14a0011",
                "sequence": "13",
                "sharing": "Public",
                "title": "Life with China: How to Survive and Prosper in the Dragon's Century"
            },
            {
                "id": 7,
                "author": "Peter Navarro/Greg Autry",
                "category": "Textbook",
                "currency": "$",
                "fileName": "Z01_NAVA0238_01_SE_EPI_PCL",
                "parentISBN": "9780132180238",
                "pearsonResourceType": "PearsonPremium",
                "price": "1.99",
                "resourceId": "e18d3d23-e3f0-4460-bf55-0e4c057e4a6d",
                "resourceInstanceID": "7f000101-6193-1053-8161-93f2e14b0012",
                "sequence": "14",
                "sharing": "Public",
                "title": "Epilogue"
            }
        ],
        "title": "Chapter 2"
    },
    {
        "chapterId": "7f000101-6193-1053-8161-93f27dc70000",
        "hasPrivateResources": "false",
        "sectionDisplayed": "true",
        "sections": [
            {
                "id": 8,
                "author": "Peter Navarro/Greg Autry",
                "category": "Textbook",
                "currency": "$",
                "fileName": "M01_NAVA0238_01_SE_C01_PCL",
                "parentISBN": "9780132180238",
                "pearsonResourceType": "PearsonPremium",
                "price": "1.99",
                "resourceId": "35572edd-a1ea-45c7-98cb-f0ef1514c862",
                "resourceInstanceID": "7f000101-6193-1053-8161-93f2e1320001",
                "sequence": "0",
                "sharing": "Public",
                "title": "It's Not China Bashing If It's True"
            },
            {
                "id": 9,
                "author": "Peter Navarro/Greg Autry",
                "category": "Textbook",
                "currency": "$",
                "fileName": "M02_NAVA0238_01_SE_C02_PCL",
                "parentISBN": "9780132180238",
                "pearsonResourceType": "PearsonPremium",
                "price": "1.99",
                "resourceId": "e07aded6-8d09-4f19-aad3-afd2ec9af538",
                "resourceInstanceID": "7f000101-6193-1053-8161-93f2e1410002",
                "sequence": "1",
                "sharing": "Public",
                "title": "Death by Chinese Poison: Bodies for Bucks and Chicks for Free"
            },
            {
                "id": 10,
                "author": "Joson Chokatte",
                "category": "Textbook",
                "pearsonResourceType": "OM",
                "resourceId": "e90b9fee-c6dc-4890-b578-bc1aec3dc54f",
                "resourceInstanceID": "7f000101-6193-1053-8161-93f2e1410003",
                "sequence": "2",
                "sharing": "Public",
                "title": "8.5_11_test_pdf"
            }
        ],
        "title": "Chapter 3"
    }
];

let arr = [];

// Test method to re-arrange an array
const tOrder = (array, book, startIndex, endIndex) => {
    arr = [...array];
    const result = Array.from(array[book].sections);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    let length = result.length;

    for (let i = 0; i < length; i++) {
        result[i].sequence = i;

    }
    arr[book].sections = result;
    console.log(result);
    return arr;
};

//Test method to move an array
const tMove = (array, source, destination, droppableSource, droppableDestination) => {
    arr = [...array];
    const sourceClone = Array.from(arr[source].sections);
    const destClone = Array.from(arr[destination].sections);
    const [removed] = sourceClone.splice(droppableSource, 1);
    destClone.splice(droppableDestination, 0, removed);
    let sLength = sourceClone.length;
    let dLength = destClone.length;

    for (let i = 0; i < sLength; i++) {
        sourceClone[i].sequence = i;

    }
    for (let i = 0; i < dLength; i++) {
        destClone[i].sequence = i;
    }


    arr[source].sections = sourceClone;
    arr[destination].sections = destClone;
    console.log(arr);
    return arr;
};

class DragandDrop extends Component {

    constructor(){
        super();
        this.state = {
            "items": books
        }
    }

    Name;

    componentDidMount() {
        this.setState({
            items: books
        });

        console.log(this.state.items)
    }

    onDragEnd = result => {
        const { source, destination } = result;
        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = tOrder(
                this.state.items,
                source.droppableId,
                source.index,
                destination.index
            );

            let state = { items: items };

            this.setState(state);
        } else {
            const result = tMove(
                this.state.items,
                source.droppableId,
                destination.droppableId,
                source.index,
                destination.index
            );
            let state2 = { items: result };

            this.setState(state2);
        }
    };

    setName = (e) => {
        e.preventDefault();
        this.Name = e.target.value;

        console.log(this.Name);

    };

    clearName = (e) =>{
        e.preventDefault();
        this.Name = null;
        console.log(this.Name);
    };

    addSection = () =>{
        if(this.Name){
            let arr = [...this.state.items];
            arr.push({
                "title": this.Name,
                "sections":[]
            });
            console.log(arr);
            this.setState({items: arr});
        }
    };

    deleteSection = (item) => {
        let array = [...this.state.items];
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].sections.length; j++) {
                if (array[i].sections[j] === item) {
                    array[i].sections.splice(j, 1);

                    for ( let k = 0; k < array[i].sections.length; k++) {
                        array[i].sections[k].sequence = k;

                    }
                    console.log(array);

                    this.setState({ items: array });
                    return true;
                }
            }
        }
    };

    render() {
        let section;
        section = this.state.items.map((book, index) => {
            return (
                <Droppable droppableId={index + ""} key={index}>

                    {(provided) => (

                        <div ref={provided.innerRef} >

                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th id="1" scope="col">{book.title}</th>
                                        <th id="2" scope="col">File Name</th>
                                        <th id="3" scope="col">Identifier Type</th>
                                        <th id="4" scope="col">ISBN</th>
                                        <th id="5" scope="col">Price</th>
                                        <th id="6" scope="col">X</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {book.sections.map((item, index) => (
                                        <Draggable
                                            key={index}
                                            draggableId={item.id}
                                            index={index}>
                                            {(provided) => (

                                                <tr
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <th id="1" scope="col">{index + 1}</th>
                                                    <th id="2" scope="col">{item.title}</th>
                                                    <th id="3" scope="col">{item.fileName}</th>
                                                    <th id="4" scope="col">{item.parentISBN}</th>
                                                    <th id="5" scope="col">{item.price}</th>
                                                    <th id="6" scope="col" onClick={() => this.deleteSection(item)}>
                                                        <button>X</button>
                                                    </th>
                                                </tr>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </tbody>
                            </table>
                        </div>
                    )}
                </Droppable>);
        })
        return (
            <div className="DragandDrop">
                <a href="" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">+ Add Section</a>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    {section}
                </DragDropContext>


                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name" className="col-form-label">Chapter Name:</label>
                                        <input type="text" className="form-control" id="name" onChange={this.setName}/>
                                    </div>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.clearName}>Close</button>
                                <button type="submit" className="btn btn-primary" onClick={this.addSection}>Send message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DragandDrop;

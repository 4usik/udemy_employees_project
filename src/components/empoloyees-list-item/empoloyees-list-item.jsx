import { Component } from 'react';
import './empoloyees-list-item.css';

class EmpoloyeesListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            salary: `${this.props.salary}$`
        }
    }

    onValueChange = (e) => {
        const salary = e.target.value;
        this.setState({salary});
        this.props.onUpdateSalary(salary, this.props.id);
    }

    render() {
        const {name, onDelete, onToggleProp, increase, rise} = this.props;

        let classNames = "list-group-item d-flex justify-content-between";
        classNames += increase ? " increase" : "";
        classNames += rise ? " like" : "";

        return (
            <li className={classNames}>
                <span onClick={onToggleProp} className="list-group-item-label" data-toggle="rise">{name}</span>
                <input type="text" className="list-group-item-input"  defaultValue={this.state.salary} onChange={this.onValueChange} />
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={onToggleProp}
                        data-toggle="increase" >
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete} >
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
    

}

export default EmpoloyeesListItem;
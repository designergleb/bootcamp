import React, {Component} from 'react';
import List from './List';

class Dropdown extends Component {
    constructor(props){
        super(props);

        this.state = {
            dropdownClosed: 'dropdown__list-closed',
            title: 'Выбор тренера',
            placeholder: 'Выберите тренера',
            item: ['Тренер 1', 'Тренер 2', 'Тренер 3', 'Тренер 4'],
            message: ''
        };
    }

    toggle = () => {
        if (this.state.dropdownClosed !== 'dropdown__list-closed') {
            this.setState({
                dropdownClosed: 'dropdown__list-closed'
            });
        } else {
            this.setState({
                dropdownClosed: 'dropdown__list'
            });
        }
    };

    applyTrainer = (e) => {
        this.setState({
            dropdownClosed: 'dropdown__list-closed',
            placeholder: e.target.innerText
        });
    };

    showMsg = (e) => {
        console.log(e.target);
        this.setState({
            message: 'Тренер успешно добавлен.'
        });
    };

    render(){
        return(
            <div className='container'>
                <h2 className='title'>{this.state.title}</h2>
                <div className='dropdown'>
                    <div onClick={this.toggle} className="dropdown__main">
                        {this.state.placeholder}
                    </div>
                    <div className={this.state.dropdownClosed}>
                        {this.state.item.map((item, index) => {
                            return <List applyTrainer={this.applyTrainer} key={index} name={item}></List>
                        })}
                    </div>
                </div>
                <button className='btn' onClick={this.showMsg}>Добавить</button>
                <div className='message'>{this.state.message}</div>
            </div>
        )

    }
}

export default Dropdown;
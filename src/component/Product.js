import React from 'react'


export default class Product extends React.Component {
  
    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.productImageUrl} alt="asd" width={150}/>
                </div>
                <div className='middle aligned content'>
                    <div className='description'>
                    <a href={this.props.url}>
                        <i className='large caret up icon' />
                    </a>
                    {this.props.votes}
                        <p>Authentic renaissance actors, delivered in just two weeks.</p>
                    </div>
                    <div className='description'>
                        <a href={this.props.url}>
                        {this.props.title}
                        </a>
                        <p>
                        {this.props.description}
                        </p>
                        </div>
                        <div className='extra'>
                        <span>Submitted by:</span>
                        <img alt="asd"
                        className='ui avatar image'
                        src={this.props.submitterAvatarUrl}
                        width={80}
                        />
                        </div>
                        </div>
                </div>
        );
    }
}
import React, { Component } from "react";

class googNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: [],
        }
    }

  
    componentDidMount() {
    this.get();
    setInterval(this.get, 60000); // runs every 5 seconds.
    }

    get = () => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=<KEY GOES HERE>')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading</div>
        }
        else {
            return (
                
                <div className="NAV">
                    <p>Check the news!</p>
                    <div >
                        <ul>
                            {items.articles.slice(0,5).map(item => (
                                <li key={item.url}><button>
                                    {item.title}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            );
        }
    }

}

export default googNews;
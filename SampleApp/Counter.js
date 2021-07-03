import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

class Counter extends Component {
    state = {
        number : 0
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    render() {
        return (
            <View>
                <Text h1>카운터</Text>
                <Text>값 : {this.state.number}</Text>
                <View style ={{flexDirection: 'row'}}>
                    <Button 
                        onPress={this.handleIncrease}
                        title = "+"
                        >
                    </Button>
                    <Button 
                        onPress={this.handleDecrease}
                        title = "-"
                        >
                    </Button>
                </View>
            </View>
        );
    }
}

export default Counter;
import React, { Component } from "react";
import '../App.css';
function Square1(props){
    return (
    <div>
        <h3>Muhammad Dzakwan Fakhriy Habibie</h3>
        <p>21120120140134 {props.komponen}</p>
        <p>hatarakus17@gmail.com {props.komponen}</p>
        </div>    
        );
    }
    function Square2(props){
        return (
        <div>
            <h3>Ezra Lazuardy Wijaya</h3>
            <p>21120120140162 {props.komponen}</p>
            <p>ezralucio@gmail.com {props.komponen}</p>
            </div>    
            );
        }
        function Square3(props){
            return (
            <div>
                <h3>Muhammad Nuril Huda Maulani</h3>
                <p>21120120140086 {props.komponen}</p>
                <p>nurilhuda155@gmail.com {props.komponen}</p>
                </div>    
                );
            }
            function Square4(props){
                return (
                <div>
                    <h3>Michelia Vadilla Verdianto</h3>
                    <p>21120120120020 {props.komponen}</p>
                    <p>michvv47@gmail.com {props.komponen}</p>
                    </div>    
                    );
                }
    export default class CompAndProps extends Component{
        render(){
            const bgColor = {
                backgroundColor: this.props.bgColor
            }
            return (
            <div className="wrapper">
                        <div className ="User-info1" style={bgColor}>
                        <Square1 komponen='' link= ''/>
                        </div>
                        <div className ="User-info2" style={bgColor}>
                        <Square2 komponen='' link= ''/>
                        </div>
                        <div className ="User-info1" style={bgColor}>
                        <Square3 komponen='' link= ''/>
                        </div>
                        <div className ="User-info2" style={bgColor}>
                        <Square4 komponen='' link= ''/>
                        </div>
                        </div>
                        )
                    }
                }                
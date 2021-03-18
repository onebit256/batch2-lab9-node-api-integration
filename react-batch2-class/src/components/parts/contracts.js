import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Link
  } from "react-router-dom";
import ChainDataService from '../../script/ChainDataService'



class Contracts extends Component {

    constructor(props) {    
        super(props);    
		this.state = {      
            hash: null,
			txhash: null,

			file_name: null,
			uploader: null,
			buffer: null
        }; 
		this.submitHandler = this.submitHandler.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
    }

	async submitHandler(event){
		 //handle web3
		 event.preventDefault()
		 const blockRecords = await ChainDataService.storeData(this.state.hash)
		 this.setState({txhash:blockRecords.transactionHash})
	}

	handleInputChange(event){
		event.preventDefault()
		const target = event.target;
        let hash;
        if (target.name === "hash") {
			hash = target.value;
        } 
       
		if (typeof(hash) !== "undefined") {
					this.setState({
						hash:hash
					});
			} 
	}

	async addToIpds(event){
		event.preventDefault();
		// const ifile =await IpfsService.addToIpfs(this.state.buffer);
	}

	async handleFile(event){
		const file = event.target.files[0]
		
		let reader = new FileReader()
		reader.readAsArrayBuffer(file)
		reader.onload = () => this.convertToBuffer(reader)
	}

	async convertToBuffer(reader)
	{
		const buffer = await Buffer.from(reader.result)
		this.setState({
			buffer:buffer   
		});
	}


	render() {
		return (

	<div className="layui-body">     
	  <div className="layui-row layui-col-space15">
	    <div className="layui-col-md12">
	      <div className="layui-card">
	        <div className="layui-card-header">申请</div>
	        <div className="layui-card-body">
				<form onSubmit={this.submitHandler}>
                    <div className="title">WEB3<br/></div>
                    <input id="hash" type="text" name="hash" placeholder="hash" 
                    onChange={this.handleInputChange}/>
                    <input type="submit" value="submit"/>
                   
                </form>
				<p>{this.state.hash}</p>
				<p>{this.state.txhash}</p>
	          


				<form className="layui-form" onSubmit={this.addToIpds}>
							<input  type="file" onChange={this.handleFile} required/> <br/> 
							<label className="layui-form-value">File Name/文件名</label>
							<input id="fileName" name="fileName" placeholder="File Name" onChange={this.handleChange}/><br/> 
	            <div className="layui-form-item">
	              <div className="layui-input-block">
	                <button className="layui-btn" type='submit' lay-submit="" lay-filter="set_website">Submit/提交</button>
	                {/* <button type="submit" className="layui-btn layui-btn-primary">取消</button> */}
	              </div>
	            </div>
			</form>

	      </div>
	    </div>
	  </div>
	</div>
	</div>
	);
        }

}


export default Contracts;



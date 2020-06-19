import React from 'react';
import '../ProfileInfo.css';

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    statusInputRef = React.createRef();

    enableEditMode = () => {
        this.setState({
            editMode: true,
        });
    };

    disableEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.statusInputRef.current.value)
    };

    updateStatusText = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`${this.props.status} ---> ${prevProps.status}`);
        if (this.props.status !== prevProps.status)
        {
            this.setState({
                status: this.props.status
            });

        }
    }
    
    render() {
        return (
            <>
                {!this.state.editMode ? (
                    <div className="status_wrap">
                        <p onDoubleClick={() => this.enableEditMode()}  className="status">
                            {this.state.status}
                        </p>
                    </div>
                ) : (
                    <div className="status_text_area_wrap">
                        <input ref={this.statusInputRef} onChange={this.updateStatusText} autoFocus={true} onBlur={() => this.disableEditMode()}  type="text" className="" />
                    </div>
                )}
            </>
        );
    }
}

export default Status;

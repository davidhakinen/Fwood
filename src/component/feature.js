import React,{ Component } from 'react';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import HailIcon from '@mui/icons-material/Hail';

class Feature_mainpage extends Component{
    render()         {
        return(
            <>
            <div className="feature_mainpage">
                <div className="feature_mainpage_container">
                    <WorkspacePremiumIcon sx={{ fontSize: "100px" }} />
                    <div className="feature_text_description">
                    <p className='feature_header'>Best quality</p>
                    <p className='feature_text'>Fwood guitar is made of the highest quality of wood and being 
                        processed with sophisticated techonology to produce the best quality
                        guitar product to our customer.</p>
                    </div>
                </div>
                <div className="feature_mainpage_container">
                    <GraphicEqIcon sx={{ fontSize: "100px" }}/>
                    <div className='feature_text_description'>
                    <p className='feature_header'>Beautiful sound</p>
                    <p className='feature_text'>By providing various types of wood and beeing toned by
                        professional engineer, Fwood guitar could produce sound that
                        beautiful and fit with our customer desire.
                    </p>
                    </div>
                </div>
                <div className="feature_mainpage_container">
                    <HailIcon sx={{ fontSize: "100px" }}/>
                    <div className="feature_text_description">
                    <p className="feature_header">Compact</p>
                    <p className="feature_text">Providing hard case by purchasing Fwood guitar, make our 
                        customer could carry the guitar to everywhere, anytime with 
                        confortable and compact design.
                    </p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Feature_mainpage;
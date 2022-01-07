import React from "react";

import './collection-preview.styles.scss'


const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
            
            // filters through items in Shop_data so it only displays 4 items as a preview
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </div>
    </div>
)


export default CollectionPreview;
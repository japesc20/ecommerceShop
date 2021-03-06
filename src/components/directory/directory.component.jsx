import React from 'react'
import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'


class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: '/hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: '/jackets'
            },
            {
                title: 'shoes',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: '/hats'
            },
            {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 4,
                linkUrl: '/hats'
            },
            {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 5,
                linkUrl: '/hats'
            }
            ]
        }
    }

    render() {

        return (
            <div className="directory-menu">

                {/* Map through state sections to send Id, title, image, url to menu item component on Homepage */}   
                {
                    this.state.sections.map(({ id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;
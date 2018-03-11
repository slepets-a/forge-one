import React from 'react';
import SwitcherButton from '../SwitcherButton';
import ImageLoader from '../ImageLoader';

const IMGS_DATA = {
    winter: 'https://stardewvalleywiki.com/mediawiki/images/thumb/a/ae/Feast_of_the_Winterstar.png/500px-Feast_of_the_Winterstar.png',
    spring: 'https://stardewvalleywiki.com/mediawiki/images/thumb/2/20/Egg_Festival.png/500px-Egg_Festival.png',
    summer: 'https://stardewvalleywiki.com/mediawiki/images/thumb/a/af/Luau.png/500px-Luau.png',
    autumn: 'https://stardewvalleywiki.com/mediawiki/images/thumb/4/45/StardewValleyFair.png/500px-StardewValleyFair.png',
};

class ImageSwitcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            season: 'winter',
        }
    }

    index = 0;

    switcherButtonClickHandler = event => {
        const {season} = event.currentTarget.dataset;
        this.setState({
            season,
        })
    };

    render() {
        const {
            season,
        } = this.state;

        return (
            <div>
                {Object.keys(IMGS_DATA).map(season =>
                    <SwitcherButton
                        key={this.index++}
                        season={season}
                        switcherButtonClickHandler={this.switcherButtonClickHandler}
                    />)
                }
                <div>
                    <ImageLoader src={IMGS_DATA[season]} />
                </div>
            </div>
        )
    }
}

export default ImageSwitcher;
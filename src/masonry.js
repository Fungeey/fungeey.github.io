import Masonry from './node_modules/react-masonry-css/dist/react-masonry-css.module.js'

function ProjectGrid(props){
    return <Masonry
        breakpointCols={3}
        className="projectGrid"
        columnClassName="projectGridCol">
        {
            <div class = "gridContainer">
                <h3>{props.title}</h3>
                <a href = "https://github.com/Fungeey/Minesweeper"><img src = "img/git.png" class = "gitImg"/></a>
                <img src = {props.img} class = "projImg"/>
                <div class = "tags">
                    <mark>Java</mark>
                </div>
            </div>
        }
        </Masonry>
}



const grid = <ProjectGrid title = "Titleas" img = "img/nn.gif"></ProjectGrid>
React.render(grid, document.getElementById('projects'));
console.log("asdf");
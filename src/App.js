import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { createPortal } from 'react-dom';


export default function App() {
  
    const users = [
      {
        name: "Schindler's List",
        image:
          "https://m.media-amazon.com/images/I/81+H4lZVw+L._SL1500_.jpg",
          description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."
      },
      {
        name: "Django Unchained",
        image:
          "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg",
          description: "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi."
      },
      {
        name: "Passengers",
        image:
          "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/chameleon/title-movie/DP_3244378_PASSENGERS%20%282016%29_1400x2100_English%20%28US%29_2.jpg?itok=TYolDZ12",
          description: "A malfunction in a sleeping pod on a spacecraft traveling to a distant colony planet wakes one passenger 90 years early."
      },
      {
        name: "Love, Death & Robots",
        image: "https://m.media-amazon.com/images/M/MV5BYjEwOWQ0MjktMjZjNy00Mzc1LWE5NTItMDQ1Yjc0Zjk0NTBlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
        description: "A collection of animated short stories that span various genres including science fiction, fantasy, horror and comedy."
      },
      {
        name: "The Good Doctor",
        image: "https://flxt.tmsimg.com/assets/p17114293_b_v13_ac.jpg",
        description: "Shaun Murphy, a young surgeon with autism and Savant syndrome, is recruited into the surgical unit of a prestigious hospital."
      },
      {
        name: "Altered Carbon: Resleeved (2020)",
        image: "https://m.media-amazon.com/images/M/MV5BMzQ4OTA4YjYtMjQ5My00ZGEzLTkyOGYtNzk4NjZlYTc5MTBjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        description: "On the planet Latimer, reawakened Takeshi Kovacs must protect a teenage tattooist named Holly while investigating the death of a yakuza boss alongside Gina, a strangely familiar no-nonsense CTAC agent."
      },
      {
        name: "The Great Dictator",
        image: "https://m.media-amazon.com/images/I/5128FFBA6XL._SY445_.jpg",
        description: "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime."
      },
      {
        name: "Avatar",
        image: "https://static.toiimg.com/photo/msid-5348868/5348868.jpg?26276",
        description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
      },
      {
        name: "Tenet",
        image: "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
        description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time."
      }
    ];
    
    
      return (
        <div className="App">
          <AddMovie />
          {users.map((user, index) => (
          <Msg key={index} name={user.name} image={user.image} description={user.description}/>
          ))}
          {/* <Counter/> */}
          {/* <Color/>
          <ColorBox/> */}
          
        </div>
      );
    }
    
    function Color(){
      const [color,setColor] = useState("orange");
      const styles = {backgroundColor:color};
      const INITIAL_COLORS = ["purple", "skyblue", "yellow", "red"];

      const [colors, setColors] = useState(["purple", "skyblue", "yellow", "red"]);

      return(
        <div>
          <input 
          value = {color}
          style={styles} 
          onChange={(event) => setColor(event.target.value)} 
          placeholder="Enter a color"
          />
          <button 
          onClick = {()=> setColors([...colors, color])}>
          Add
          </button>
          {/* <p>{color}</p> */}
          {INITIAL_COLORS.map((id, index) => (
            <ColorBox key={index} color={id}/> 
          ))}
          
        </div>
      )
    }

    function ColorBox({color}){
      const styles = {
        backgroundColor:color,
        height: "100px",
        width: "120px",
        marginTop: "5px"
      };
      return(
        <div style={styles}>

        </div>
      )
    }

    function Msg({ name,image,description }) {
      
      return (
        <div>
          <img src={image} height="250" alt={name}/>
          <Counter/>
          <p>{description}</p>
          <h1 className="name">{name}</h1>;
          
      </div>
      )
    }

    function Counter(){
      const [ like, setLike ] = useState(0);
      const [dislike,setDislike] = useState(0);
      const incrementLike = () => setLike(like + 1);
      const incrementDisLike = () => setDislike(dislike + 1);
      return(
      <div>
        <button 
         onClick={incrementLike}>
           👍 {like}
        </button>

        <button
        onClick={incrementDisLike}>
          👎 {dislike}
        </button>
      </div>
      )
    }

    function AddMovie() {
      const inputStyles = {
        width:"300px",
        margin: "0px 5px 5px 0px"
      };
      const buttonStyles = {
        width:"305px",
        marginBottom: "20px"
      };

      return (
        <div>
          <input style = {inputStyles} placeholder="Enter the Movie Name"/>
          <br/>
          <input style = {inputStyles} placeholder="Enter image address of MoviePoster"/>
          <br/>
          <input style = {inputStyles} placeholder="Enter description of Movie"/>
          <br/>
          <button style={buttonStyles}>Add Movie</button>
        </div>
      )
    }



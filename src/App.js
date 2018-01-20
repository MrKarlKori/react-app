import React, { Component } from 'react';
import './App.css';

class Header extends Component {
	render() {
		return (
			<header>
				<span>Header</span>
				<Nav cities={this.props.cities} changeCity={this.props.changeCity} />
			</header>
		);
	}
}

class Footer extends Component {
	render() {
		return (
			<footer>
				<span>Footer</span>
				<Nav cities={this.props.cities} changeCity={this.props.changeCity} />
			</footer>
		);
	}
}

function Nav(props) {
	const listItems = props.cities.map((item, index) => {
		return <li key={index} data-id={index} onClick={props.changeCity}>{item}</li>;
	})
		return (
			<nav><ul>{listItems}</ul></nav>
		);
}

class City extends Component {
	render() {
		return (
			<main>
				<h1>{this.props.name}</h1>
				<img src={require('./img/' + this.props.img)} alt={"Coat of Arms of " + this.props.name} />
				<p>{this.props.history}</p>
				<table>
				 <thead>
					<tr>
						<td>Year of founding</td>
						<td>Population</td>
						<td>Square</td>
					</tr>
				 </thead>
				 <tbody>
					<tr>
						<td>{this.props.table.year} year</td>
						<td>{this.props.table.pop}</td>
						<td>{this.props.table.square} km2</td>
					</tr>
				 </tbody>
				</table>
				<a href={"https://en.wikipedia.org/wiki/" + this.props.wiki} target="_blank">Read about {this.props.name} on Wikipedia</a>
				<br />
				<div className="buttons">
					<button onClick={this.props.back}>Previous city</button>
					<button onClick={this.props.forward}>Next city</button>
				</div>
			</main>
		);
	}
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentCity: 0,
			name: ["Brest", "Homiel", "Mahiliou", "Viciebsk", "Hrodna", "Minsk"],
			history: [
				"During medieval times, the city was part of the Kingdom of Poland from 1020 until 1319 when it was taken by the Grand Duchy of Lithuania. It became part of the Polish–Lithuanian Commonwealth in 1569. As a result of the Partitions of Poland, it was incorporated into the Russian Empire in 1795. After World War I, the city returned to Second Polish Republic. During the Invasion of Poland by Nazi Germany and the Soviet Union in 1939 the city was first captured by the Wehrmacht and soon passed on to the USSR in accordance with German–Soviet Frontier Treaty. In 1941 it was taken again by the Nazis during Operation Barbarossa. After the war, once the new boundaries between the USSR and Poland were ratified, the city became part of the Soviet BSSR until the breakup of the country in 1991. It is now a part of an independent Belarus.",
				"On 27 July 1990, the Declaration of State Sovereignty of the Belarusian Soviet Socialist Republic was drafted. Gomel became a city in the independent state of the Republic of Belarus. In the first half of the 1990s, Gomel, like the whole of Belarus, was struck by an acute socio-economic crisis: living standards fell sharply, the death rate exceeded the birth rate, the volume of industrial production fell sharply, and the crime rate increased. From 1996 onwards the situation in the country and in Gomel began to stabilize and improve gradually.",
				"Mogilev (or Mahilyow; Belarusian: Магілёў, pronounced [maɣʲiˈlʲou̯]; Łacinka: Mahiloŭ; Russian: Могилёв, pronounced [məɡʲɪˈlʲof]; Yiddish: מאָליעוו‎, Molyev) is a city in eastern Belarus, about 76 kilometres (47 miles) from the border with Russia's Smolensk Oblast and 105 km (65 miles) from the border with Russia's Bryansk Oblast. As of 2011, its population was 360,918,[1] up from an estimated 106,000 in 1956. It is the administrative centre of Mogilev Region and the third largest city in Belarus.",
				"Vitebsk, or Vitsebsk (Belarusian: Ві́цебск, Łacinka: Viciebsk, pronounced [ˈvʲitsʲepsk]; Russian: Витебск, pronounced [ˈvʲitʲɪpsk]), is a city in Belarus. The capital of the Vitebsk Region, it had 342,381 inhabitants in 2004, making it the country's fourth-largest city. It is served by Vitebsk Vostochny Airport and Vitebsk Air Base. In January 1991, Vitebsk celebrated the first Marc Chagall Festival. In June 1992, a monument to Chagall was erected on his native Pokrovskaja Street and a memorial inscription was placed on the wall of his house. Since 1992, Vitebsk has been hosting the annual Slavianski Bazaar in Vitebsk, an international art festival.",
				"Grodno or Hrodna (Belarusian: Гродна, Hrodna [ˈɣrɔdna]; Russian: Гродно, tr. Grodno, IPA: [ˈɡrodnə], see also other names) is a city in western Belarus. It is located on the Neman close to the borders of Poland and Lithuania (about 20 km (12 mi) and 30 km (19 mi) away respectively). It has 365,610 inhabitants (2016 census). It is the capital of Grodno Region and Grodno District.",
				"The earliest historical references to Minsk date to the 11th century (1067), when it was noted as a provincial city within the Principality of Polotsk. The settlement developed on the rivers. In 1242, Minsk became part of the Grand Duchy of Lithuania. It received town privileges in 1499. From 1569, it was a capital of the Minsk Voivodeship, in the Polish–Lithuanian Commonwealth. It was part of a region annexed by the Russian Empire in 1793, as a consequence of the Second Partition of Poland. From 1919 to 1991, after the Russian Revolution, Minsk was the capital of the Byelorussian Soviet Socialist Republic, in the Soviet Union. Minsk will host the 2019 European Games."
			],
			table: [
				{year: 1019, pop: "340k", square: 145},
				{year: 1142, pop: "526k", square: 140},
				{year: 1267, pop: "376k", square: 118},
				{year: 947, pop: "366k", square: 124},
				{year: 1128, pop: "365k", square: 142},
				{year: 1067, pop: "1,9m", square: 409}
			],
			wiki: ["Brest,_Belarus", "Gomel", "Mogilev", "Vitebsk", "Grodno", "Minsk"],
			img: [
				"Brest.png",
				"Homiel.png",
				"Mahiliou.png",
				"Viciebsk.png",
				"Hrodna.png",
				"Minsk.png"
			]
		}
		this.moveForward = this.moveForward.bind(this);
		this.moveBack = this.moveBack.bind(this);
		this.changeCity = this.changeCity.bind(this);
	}

	moveForward() {
		if (this.state.currentCity < 5) {
			this.setState({
				currentCity: this.state.currentCity + 1
			});
		} else {
			this.setState({
				currentCity: 0
			});
		}
	}

	moveBack() {
		if (this.state.currentCity > 0) {
			this.setState({
				currentCity: this.state.currentCity - 1
			});
		} else {
			this.setState({
				currentCity: this.state.name.length - 1
			});
		}
	}

	changeCity(e) {
		this.setState({
			currentCity: +e.target.getAttribute("data-id")
		});
	}

  render() {
    return (
    	<React.Fragment>
    		<Header cities={this.state.name} changeCity={this.changeCity} />
    		<City img={this.state.img[this.state.currentCity]} name={this.state.name[this.state.currentCity]} 
    		history={this.state.history[this.state.currentCity]} table={this.state.table[this.state.currentCity]} 
    		wiki={this.state.wiki[this.state.currentCity]} forward={this.moveForward} back={this.moveBack} />
    		<Footer cities={this.state.name} changeCity={this.changeCity} />
    	</React.Fragment>
    );
  }
}

export default App;

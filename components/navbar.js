const navbar = ()=>{

    return `<div id="navbar">
        <h1>Food-Recipes</h1>
        <input type="text" id="input" placeholder="Search Recipes Here..........">
        <button id="button" onclick="searchFood()"><i class="fa-brands fa-searchengin"></i></button>

        <div id="options">
            <h3><a href="FoodOfDay.html">Food Of The Day</a></h3>
            <h3><a href="randomRecipes.html">Random Recipes</a></h3>
            <h3><a href="#">Register</a></h3>

            <h3><a href="#">Login</a></h3>
        </div>
    </div>`;

}

export default navbar;
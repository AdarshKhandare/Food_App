const getData = async (url) =>{

    try
    {
            
        let res = await fetch(url);
        let data = await res.json();
        return data.categories;

    }
    catch(err)
    {
        console.log("NOT FOUND!")
    }
}


const append = (data, parent) =>{

    parent.innerHTML = null;

    data.forEach(({strCategory,strCategoryDescription,strCategoryThumb})=>{

        let div = document.createElement("div");

        let name = document.createElement("h2");
        name.innerText = strCategory
        name.setAttribute("id","name")

        let info = document.createElement("p");
        info.innerText = strCategoryDescription
        info.setAttribute("id", "info")


        let img = document.createElement("img");
        img.src = strCategoryThumb;

        div.append(img,name,info)

        parent.append(div)

    });

}
export { getData , append}



async function searchFood(url){
    // www.themealdb.com / api / json / v1 / 1 / search.php ? s = Arrabiata

        try
        {
                
            let res = await fetch(url);
            let data = await res.json();
            return data.meals;

        }
        catch(err)
        {
            console.log("NOT FOUND!")
        }

}

const appendSearchFood = (data, parent) =>{

    parent.innerHTML = null;

    data.forEach(({strMeal,strMealThumb})=>{

        let div = document.createElement("div");

        let name = document.createElement("h2");
        name.innerText = strMeal
        name.setAttribute("id","name")


        let img = document.createElement("img");
        img.src = strMealThumb;

        div.append(img,name)

        parent.append(div)

    });
}


export { searchFood , appendSearchFood}
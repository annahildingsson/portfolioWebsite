function loadFavoriteRecipes() {
    const recipes = [
        { title: 'Asian Glazed Salmon', desc: 'With sesame, soy sauce, and scallions', icon: '🥢' },
        { title: 'Marry Me Chicken', desc: 'Creamy sauce with sun-dried tomatoes', icon: '🍗' },
        { title: 'Slow-Cooked Beef Stew', desc: 'Rich and savory slow-cooked stew', icon: '🍲' },
        { title: 'Ajvar Beef Patties', desc: 'With roasted potato wedges and tzatziki', icon: '🥘' }
    ];

    const container = document.getElementById('recipe-list');
    
    if (!container) return;

    recipes.forEach(recipe => {
        const item = document.createElement('div');
        item.className = 'recipe-item';
        
        item.innerHTML = `
            <div class="recipe-icon">${recipe.icon}</div>
            <div class="recipe-text">
                <h4>${recipe.title}</h4>
                <p>${recipe.desc}</p>
            </div>
        `;
        
        container.appendChild(item);
    });
}

loadFavoriteRecipes();
function toggleDetail(e) {
    const target = $(e.target)


    

    if($(target).hasClass("active"))  {
        $(target).html("detail").removeClass("active")
    } else {

        $(target).html("less info").addClass("active")
        
    }


    const item = $(target).parents(".about-exp-header")

    const detail = $(item).children(".about-exp-header-item-detail")
  
    $(detail).slideToggle()
}
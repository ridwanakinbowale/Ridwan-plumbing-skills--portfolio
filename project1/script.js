 function bookService() {
    const phoneNumber = "2348114538280";
    const message ="Hello, I want to book a plumbing service" ;
    const url = 'https://wa.me/${08114538280}?text=${encodeURIComponent(message)}';
    window.open(url,'_blank');

}
program test
    use ci_example, only: create_greeting

    implicit none

    character(len=*), parameter :: name = "World"
    character(len=*), parameter :: expected = "Hello, " // name // "!"
    character(len=:), allocatable :: greeting

    greeting = create_greeting(name)
    if (greeting == expected) then
        print *, "Test passed!"
    else
        error stop "Test failed! Expected '" // expected // "' but got '" // greeting // "'"
    end if
end program

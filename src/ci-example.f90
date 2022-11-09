module ci_example
    implicit none
    private

    public :: create_greeting
contains
    pure function create_greeting(name) result(greeting)
        !! Given a [name], construct a [greeting] for them
        character(len=*), intent(in) :: name
        character(len=:), allocatable :: greeting

        greeting = "Hello, " // name // "!"
    end function
end module

var tipuesearch = {"pages":[{"title":" CI-Example ","text":"CI-Example Welcome to the Fortran CI Example. How to Read This Documentation The listings below are not exhaustive.\nTo see the full listings use the links at the top of the page.\nAlso, if you know what you're looking for, there is a search bar in the top right.","tags":"home","loc":"index.html"},{"title":"create_greeting – CI-Example","text":"public pure function create_greeting(name) result(greeting) Given a [name], construct a [greeting] for them Arguments Type Intent Optional Attributes Name character(len=*), intent(in) :: name Return Value character(len=:),allocatable Contents None","tags":"","loc":"proc/create_greeting.html"},{"title":"ci_example – CI-Example","text":"Contents Functions create_greeting Functions public pure function create_greeting (name) result(greeting) Given a [name], construct a [greeting] for them Arguments Type Intent Optional Attributes Name character(len=*), intent(in) :: name Return Value character(len=:),allocatable","tags":"","loc":"module/ci_example.html"},{"title":"ci-example.f90 – CI-Example","text":"Contents Modules ci_example Source Code ci-example.f90 Source Code module ci_example implicit none private public :: create_greeting contains pure function create_greeting ( name ) result ( greeting ) !! Given a [name], construct a [greeting] for them character ( len =* ), intent ( in ) :: name character ( len = :), allocatable :: greeting greeting = \"Hello, \" // name // \"!\" end function end module","tags":"","loc":"sourcefile/ci-example.f90.html"}]}
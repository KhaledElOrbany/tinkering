#include <iostream>
#include <string>

using namespace std;

bool isPalindrom(const std::string &str)
{
    std::string source_string = str, reversed_string = "";
    for (int i = source_string.length() - 1; i >= 0; --i)
    {
        source_string[i] = tolower(str[i]);
        reversed_string += source_string[i];
    }
    std::cout << reversed_string << std::endl;
    return reversed_string == source_string;
}

int main(int argc, char const *argv[])
{
    cout << isPalindrom("a") << endl;
    cout << isPalindrom("aba") << endl;
    cout << isPalindrom("Abba") << endl;
    cout << isPalindrom("hello") << endl;
    return 0;
}

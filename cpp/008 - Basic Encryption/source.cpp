#include <iostream>
#include <string>

using namespace std;

std::string encrypt(std::string text, int rule)
{
    if (text == "")
        return "";
    for (int i = 0; i < text.length(); ++i)
    {
        text[i] = int(text[i] + rule) > 255 ? int(text[i] + rule) - 255 : text[i] + rule;
    }
    return text;
};

int main(int argc, char const *argv[])
{
    cout << encrypt("", 1) << endl;
    cout << encrypt("a", 1) << endl;
    cout << encrypt("please encrypt me", 2) << endl;
    return 0;
}

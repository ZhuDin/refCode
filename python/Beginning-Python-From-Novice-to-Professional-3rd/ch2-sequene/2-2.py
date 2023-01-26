# https://www.something.com

url = input('Please enter the URL:')
domain = url[12:-4]

print('Domain name: ' + domain)

screen_width = 80
text_width   = len(url)
box_width    = text_width + 6
left_margin  = (screen_width - box_width) // 2

print()
print(' ' * left_margin + '+' + '-' * (box_width) + '+')
print(' ' * left_margin + '|' + ' ' * (box_width) + '|')
print(' ' * left_margin + '|' + url + ' ' * 6     + '|')
print(' ' * left_margin + '|' + ' ' * (box_width) + '|')
print(' ' * left_margin + '+' + '-' * (box_width) + '+')